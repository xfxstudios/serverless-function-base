// index.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const helloWorld = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const response: APIGatewayProxyResult = {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello, world!' }),
    };
    return response;
  } catch (error) {
    console.error(error);
    const response: APIGatewayProxyResult = {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
    return response;
  }
};
