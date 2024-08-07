import { Link } from "expo-router";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>

      <View style={styles.container_logo}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text className="text-white font-popBold text-3xl">Na Régua</Text>
      </View>

      <View style={styles.container_form}>
        <View style={styles.form}>
          <Image
            source={require("../../assets/images/User.png")}
            style={styles.inputImg}
          />
          <TextInput style={styles.input} placeholder="Digite seu login"></TextInput>
        </View>

      <View style={{gap:3}}>
        <View style={styles.form}>
          <Image
            source={require("../../assets/images/Key.png")}
            style={styles.inputImg}
          />
          <TextInput style={styles.input} placeholder="Digite sua senha"></TextInput>
        </View>

        <TouchableOpacity>
          <Text style={styles.lembrarSenha}>Lembrar senha</Text>
        </TouchableOpacity>

      </View>

    </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textbutton}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
          <Text style={styles.lembrarSenha}>Criar uma conta</Text>
      </TouchableOpacity>

      <Link href={"/home"}>Home</Link>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1C1F",
    gap: 80,
  },
  container_logo: {
    alignItems: "center",
  },
  container_form: {
    alignItems: "center",
    gap: 35,
  },
  lembrarSenha: {
    color: "#5F5F5F",
    fontSize: 13,
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
