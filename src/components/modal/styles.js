import { StyleSheet } from 'react-native';
import {theme} from '../../styles/theme';

export const styles = StyleSheet.create(
    
    {
    container: {
        backgroundColor: theme.colors.backgroundColorOpacity,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: theme.colors.backgroundColorModal,
        width: '85%',
        padding: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2D3142',
        marginBottom: 24
    },
    innerPassword: {
        backgroundColor: theme.colors.outhers,
        width: '90%',
        padding: 14,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    imgCopy: {
        width: 20,
        height: 20,
        padding: 0
    },
    textInfor: {
        color: theme.colors.textInfor
    },
    text: {
        color: theme.colors.textColor,
        textAlign: 'center'
    },
    buttonArea: {
        flexDirection: "row",
        width: '90%',
        marginTop: 8,
        alignContent: 'center',
        justifyContent: 'space-between',

    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 14,
        marginTop: 14,
        padding: 8,
    },
    buttonText: {},
    buttonSave: {
        backgroundColor:  theme.colors.buttonColor,
        borderRadius: 8,
    },
    buttonSaveText: {
        color: theme.colors.textColor,
        fontWeight: 'bold',
    }
})