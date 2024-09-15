import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

interface UserDataStore {
  users: Record<string, string>;
  length: number;
}
interface UserDataContext {
  registerUser?: (email: string, pass: string) => boolean;
  signInUser?: (email: string, pass: string) => boolean;
  activeUser: string;
}
const initState: UserDataStore = { users: {}, length: 0 };
const UserDataContext = createContext<UserDataContext>({
  activeUser: '',
});

export default function UserDataProvider(props: PropsWithChildren) {
  const [usersData, setUsersData] = useState<UserDataStore>(initState);
  const [activeUser, setActiveUser] = useState<string>('');
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    const storeData = localStorage.getItem('usersData');
    if (storeData) {
      setUsersData(JSON.parse(storeData));
    } else {
      // Init local storage on first load
      localStorage.setItem('usersData', JSON.stringify(initState));
    }
    setReady(true);
  }, []);

  const registerUser = (email: string, pass: string) => {
    const lowerEmail = email.toLowerCase();
    if (usersData.users[lowerEmail] !== undefined) {
      return false;
    }
    setUsersData((prevState) => {
      const updatedUsers = { ...prevState.users, [lowerEmail]: pass };
      const updatedState = {
        users: updatedUsers,
        length: usersData.length + 1,
      };
      localStorage.setItem('usersData', JSON.stringify(updatedState));
      return updatedState;
    });
    return true;
  };
  const signInUser = (email: string, pass: string) => {
    const lowerEmail = email.toLowerCase();
    const isValidPassword = usersData.users[lowerEmail] === pass;
    if (isValidPassword) {
      setActiveUser(lowerEmail);
      return true;
    }
    return false;
  };

  return (
    <UserDataContext.Provider value={{ registerUser, signInUser, activeUser }}>
      {isReady ? props.children : 'Loading...'}
    </UserDataContext.Provider>
  );
}

export const useUserDataContext = () => useContext(UserDataContext);
