import React from 'react';

export interface User {
    id: number;
    full_name: string;
    email: string;
    city: string;
}

export interface UserListProps {
    loading: boolean;
    error: string | null;
    children: React.ReactNode;
}