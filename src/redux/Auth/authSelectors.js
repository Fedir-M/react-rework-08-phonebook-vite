export const isAuthSelector = state => state.auth.isAuth; // общий стейт авторизации
export const userSelector = state => state.auth.user.name; // это для вывода имейла в хедере
export const userEmailSelector = state => state.auth.user.email;
export const isRefreshSelector = state => state.auth.isRefreshing; // общий стейт обновления
export const selectAuthToken = state => state.auth.token;