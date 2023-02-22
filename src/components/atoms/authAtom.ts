import { atom } from 'recoil'

export interface authState{
    open: boolean;
    view: 'login' | 'signup' | 'create account'
}

const defaultAuthState: authState = {
    open: false,
    view: 'login'
}

export const authState = atom<authState>({
    key:'authState',
    default: defaultAuthState,
})