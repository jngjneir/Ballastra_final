import pool from '../config/db.js';

// Existing signup
export const createUser = async (name, email, password, avatarUrl) => {
    const query = `
        INSERT INTO users (name, email, password, avatar_url)
        VALUES ($1, $2, $3, $4)
        RETURNING id, name, email, avatar_url, status, created_at
    `;
    const values = [name, email, password, avatarUrl];
    const result = await pool.query(query, values);
    return result.rows[0];
};

// Existing email login
export const findUserByEmail = async (email) => {
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await pool.query(query, [email]);
    return result.rows[0];
};

// NEW — Find Apple Sign-in user
export const findUserByAppleId = async (appleId) => {
    const query = `SELECT * FROM users WHERE apple_id = $1`;
    const result = await pool.query(query, [appleId]);
    return result.rows[0];
};

// NEW — Create Apple Sign-in user
export const createAppleUser = async (appleId, email, avatarUrl = null) => {
    const query = `
        INSERT INTO users (apple_id, email, avatar_url)
        VALUES ($1, $2, $3)
        RETURNING id, email, apple_id, avatar_url, status, created_at
    `;
    const values = [appleId, email, avatarUrl];
    const result = await pool.query(query, values);
    return result.rows[0];
};
