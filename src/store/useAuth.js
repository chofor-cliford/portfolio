import create from 'zustand';
import {persist} from 'zustand/middleware';

export const useStore = create(set => ({
    value: null,
    searchValue: (values) => set({value: values})
}))

const AuthStore = (set) => ({
    userProfile: null,
    addUser: (user) => set({userProfile: user}),
    removeUser: () => set({userProfile: null}),
});

const store = persist(AuthStore, {name: 'auth'});
const useAuthStore = create(store);

export default useAuthStore;