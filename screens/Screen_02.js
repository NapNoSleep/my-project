import React, { useState } from 'react';
import { View, Text, TextInput, CheckBox, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignUp = () => {
    // Logic xử lý khi nhấn nút 'Continue'
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Agree Terms:', agreeTerms);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/DATA/Image 19.png")}  // đường dẫn hình ảnh của bạn
        style={styles.image}
      />
      <Text style={styles.title}>Nice to see you!</Text>
      <Text style={styles.subtitle}>Create your account</Text>

      {/* Tạo hàng chứa hình ảnh và ô nhập liệu tên */}
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/DATA/codicon_account.png")}  // đường dẫn tới hình ảnh tài khoản
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your user name"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Tạo hàng chứa hình ảnh và ô nhập liệu email */}
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/DATA/Vector.png")}  // đường dẫn tới biểu tượng vector cho email
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Tạo hàng chứa hình ảnh và ô nhập liệu mật khẩu */}
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/DATA/lock.png")}  // đường dẫn tới biểu tượng lock cho mật khẩu
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={agreeTerms}
          onValueChange={setAgreeTerms}
        />
        <Text style={styles.checkboxText}>
          I agree with <Text style={styles.linkText}>Terms & Conditions</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: agreeTerms ? '#00A9F4' : '#CCC' }]}
        onPress={handleSignUp}
        disabled={!agreeTerms}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row', // Căn chỉnh hình ảnh và TextInput theo hàng ngang
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,  // Kích thước của icon
    height: 24,
    marginRight: 10,  // Khoảng cách giữa icon và TextInput
  },
  input: {
    flex: 1,  // TextInput sẽ chiếm phần không gian còn lại
    height: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 8,
  },
  linkText: {
    color: '#00A9F4',
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
