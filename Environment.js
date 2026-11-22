import dotenv from 'dotenv';

dotenv.config();

export class Environment {

    static getEnvironment() {
        return process.env.ENV || 'stage';
    }

    static getBaseURL() {

        const env = this.getEnvironment();

        return env === 'prod'
            ? process.env.PROD_URL
            : process.env.STAGE_URL;
    }

    static getUsername() {

        const env = this.getEnvironment();

        return env === 'prod'
            ? process.env.PROD_USERNAME
            : process.env.STAGE_USERNAME;
    }

    static getPassword() {

        const env = this.getEnvironment();

        return env === 'prod'
            ? process.env.PROD_PASSWORD
            : process.env.STAGE_PASSWORD;
    }
}