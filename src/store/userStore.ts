// Example state for users
export const userStore = {
  users: [] as any[],
  setUsers: (list: any[]) => {
    userStore.users = list;
  }
};
