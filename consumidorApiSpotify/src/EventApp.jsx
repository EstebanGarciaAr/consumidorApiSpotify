import { UserProvider } from "./auth/context/UserProvider"
import {AppRouter} from "./router/AppRouter"

export const EventApp = () => {

    return (
        <>
          <UserProvider>
            <AppRouter/>
          </UserProvider>
        </>
    );
};