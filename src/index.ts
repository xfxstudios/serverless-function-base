// index.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export const helloWorld = async (event: APIGatewayProxyEvent, context:Context): Promise<APIGatewayProxyResult> => {
  try {
    const response: APIGatewayProxyResult = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Hello, world!' }),
    };
    return response;
  } catch (error) {
    console.error(error);
    const response: APIGatewayProxyResult = {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
    return response;
  }
};
