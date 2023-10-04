import { TextInput } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';


const Screen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [description, setDescription] = useState('');
}
return(
    <View style={styles.container}>
        <View style = {styles.topContainer}>
            <TextInput 
            value = {fullName}
            onChangeText={value=>setFullName(value)}
            clearButtonMode = {'while-editing'}
            placeholder = {'Enter Full Name'}
            placeholderTextColor = {'grey'}
            />
            <TextInput 
            value = {email}
            onChangeText={value=>setEmail(value)}
            clearButtonMode = {'while-editing'}
            placeholder = {'Enter Email'}
            placeholderTextColor = {'grey'}
            keyboardType='email-address'
            />
            <PhoneInput 
            ref={PhoneInput}
            defaultValue={phoneNumber}
            defaultCode='US'
            onChangeText={value=>setPhoneNumber(value)}
            clearButtonMode = {'while-editing'}
            placeholder = {'Enter Phone Number'}
            placeholderTextColor = {'grey'}
            keyboardType='number-pad'
            />
            <TextInput 
            value = {description}
            onChangeText={value=>setDescription(value)}
            clearButtonMode = {'while-editing'}
            placeholder = {'Enter A Self Description'}
            placeholderTextColor = {'grey'}
            />
            <TextInput 
            />
        </View>
    </View>
)
export default Screen;