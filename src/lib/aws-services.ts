import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { Auth } from 'aws-amplify';

// Initialize DynamoDB client
const dynamoClient = new DynamoDBClient({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});

const docClient = DynamoDBDocumentClient.from(dynamoClient);

// Initialize S3 client
const s3Client = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});

// User profile operations
export async function updateUserProfile(userId: string, profileData: any) {
  const command = new PutCommand({
    TableName: 'UserProfiles',
    Item: {
      userId,
      ...profileData,
      updatedAt: new Date().toISOString(),
    },
  });

  return docClient.send(command);
}

export async function getUserProfile(userId: string) {
  const command = new GetCommand({
    TableName: 'UserProfiles',
    Key: { userId },
  });

  return docClient.send(command);
}

// Booking operations
export async function createBooking(bookingData: any) {
  const command = new PutCommand({
    TableName: 'Bookings',
    Item: {
      ...bookingData,
      createdAt: new Date().toISOString(),
    },
  });

  return docClient.send(command);
}

export async function getUserBookings(userId: string) {
  const command = new QueryCommand({
    TableName: 'Bookings',
    KeyConditionExpression: 'userId = :userId',
    ExpressionAttributeValues: {
      ':userId': userId,
    },
  });

  return docClient.send(command);
}

// S3 operations for user documents and images
export async function uploadUserDocument(userId: string, file: File) {
  const key = `users/${userId}/documents/${file.name}`;
  const command = new PutObjectCommand({
    Bucket: import.meta.env.VITE_AWS_S3_BUCKET,
    Key: key,
    Body: file,
    ContentType: file.type,
  });

  return s3Client.send(command);
}

export async function getUserDocument(userId: string, fileName: string) {
  const key = `users/${userId}/documents/${fileName}`;
  const command = new GetObjectCommand({
    Bucket: import.meta.env.VITE_AWS_S3_BUCKET,
    Key: key,
  });

  return s3Client.send(command);
}