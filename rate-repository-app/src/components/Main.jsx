import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate, useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import useSignIn from '../hooks/useSignIn';
import AuthStorage from '../utils/authStorage';
import RepositoryList from './RepositoryList/RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import theme from './Text';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.backgroundColor
    },
});

const Main = () => {

    const [signIn] = useSignIn();
    const client = useApolloClient();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password } = values;
        const authStorage = new AuthStorage('loginToken')
        try {
            const { data } = await signIn({ username, password });
            if (data) {
                await authStorage.setAccessToken(data?.authenticate?.accessToken)
                client.resetStore();
                navigate("/repositoryList")
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/repositoryList" element={<RepositoryList />} />
                <Route path="/signin" element={<SignIn onSubmit={onSubmit} />} />
                <Route path="*" element={<Navigate to="/repositoryList" replace />} />
            </Routes>
        </View>
    );
};

export default Main;