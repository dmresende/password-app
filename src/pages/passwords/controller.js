import { useState } from 'react';
import useStorage from '../../hooks/useStorage';

export function PasswordController() {
  const [listPassword, setListPassword] = useState([]);
  const { getItem, removeItem } = useStorage();

  async function loadPasswords() {
    const passwords = await getItem('@pass');
    setListPassword(passwords);
  }

  async function handleDeletePassword(item) {
    const password = await removeItem('@pass', item);
    setListPassword(password);
  }

  return {
    listPassword,
    loadPasswords,
    handleDeletePassword,
  };
}
