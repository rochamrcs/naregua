import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.textTitle}>Na Régua</Text>

      <View style={styles.form}>

        <Image
          source={require("../../assets/images/User.png")}
          style={styles.inputImg}
        />
        <TextInput style={styles.input}placeholder="Digite seu login"></TextInput>

      </View>

      <View style={styles.form}>

        <Image
          source={require("../../assets/images/Key.png")}
          style={styles.inputImg}
        />
        <TextInput style={styles.input}placeholder="Digite sua senha"></TextInput>

      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textbutton}>Acessar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1C1F",
    
  },
  textTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: '700',
  },
  logo: {
    width: 142,
    height: 142,
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#D9D9D9",
    width: '75%',
    height: 50,
    marginStart: 10,
  },
  form: {
    width: 342,
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderRadius: 3,
  },
  inputImg: {
    width: 65,
  },
  button: {
    backgroundColor: "#D49929",
    width: '87%',
    borderRadius: 3,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textbutton: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: '600'
  }
})
