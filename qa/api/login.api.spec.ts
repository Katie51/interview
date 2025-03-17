import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const BASE_URL = 'https://automationexercise.com/api';  

test.describe('Login API', () => {
    test('Should authenticate successfully with valid credentials', async ({ request }) => {
        const response = await request.post(`${BASE_URL}/verifyLogin`, {
            form: {
                email: process.env.LOGIN_EMAIL,
                password: process.env.LOGIN_PASSWORD
            }
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.message).toBe('User exists!');
    });
});
