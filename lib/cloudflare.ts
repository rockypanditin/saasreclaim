import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadToR2(file: Buffer, fileName: string): Promise<string> {
  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  const bucketName = process.env.R2_BUCKET_NAME;
  const publicUrl = process.env.R2_PUBLIC_URL || "https://demo.r2.dev";

  if (!accountId || accountId.includes("your-account")) {
    console.log("Mock R2 upload triggered for", fileName);
    return `${publicUrl}/${fileName}`;
  }

  const R2 = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: accessKeyId!,
      secretAccessKey: secretAccessKey!,
    },
  });

  await R2.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: file,
      ContentType: "application/pdf",
    })
  );

  return `${publicUrl}/${fileName}`;
}
