export const unreadMessagesCount = state => state.messages.main.length
export const unreadNotificationsCount = state => state.notifications.main.length
export const remainTasksCount = state => state.tasks.main.length
export const currentUser = state => state.user.main
export const roles = state => state.user.main.roles
export const company = state => state.company
