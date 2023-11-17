import { Box, Button, ButtonText, Center, FormControl, FormControlLabel, FormControlLabelText, HStack, Heading, Image, Input, InputField, Switch, Text, View } from "@gluestack-ui/themed";
import { useState } from "react";

import homem from "../../../assets/homem-icon.png"
import mulher from "../../../assets/mulher-icon.png"


export default function Main() {
    const [peso, setPeso] = useState("72")
    const [altura, setAltura] = useState("1.70")
    const [sexo, setSexo] = useState(false)
    const [resultado, setResultado] = useState("")

    const calcularHandle = () => {
        let alturaConvertida = parseFloat(altura)
        let result  = 0

        if (altura>2.2) {
            setResultado("Altura deve ser menor que 2.2")
            return;
        }

        if (sexo) {
            result = (62.1*alturaConvertida)-44.7
        } else {
            result = (72.7*alturaConvertida)-58
        }
        

        setResultado(Math.round(result))
    }

    const limparHandle = () => {
        setPeso("72")
        setAltura("1.70")
        setSexo(false)
        setResultado("")
    }
  

    return <View  style={{ backgroundColor: '#F0F2EF', padding: 12, borderRadius: 30 }}>
        <Box p="$2" h={"$3/4"} w={300} borderRadius={"$md"} >
        <Center h={"$full"}>
            <Heading style={{paddingBottom: 25, color:'#5C5346', fontWeight: 'bold'}}>Peso Ideal</Heading>
            <FormControl >
                <FormControlLabel>
                    <FormControlLabelText>Peso</FormControlLabelText>
                </FormControlLabel>
                <Input w={"$full"}>
                    <InputField value={peso} onChangeText={setPeso} keyboardType="numeric"/>
                </Input>
                <FormControlLabel>
                    <FormControlLabelText>Altura</FormControlLabelText>
                </FormControlLabel>
                <Input w={"$full"}>
                    <InputField value={altura} onChangeText={setAltura} keyboardType="number-pad"/>
                </Input>
                <FormControlLabel>
                    <FormControlLabelText>Sexo</FormControlLabelText>
                </FormControlLabel>
                <HStack w={"$full"} space="md" justifyContent="center" alignItems="center" style={{paddingBottom: 17}}>
                    <FormControlLabelText>Homem</FormControlLabelText>
                    <Switch value={sexo} onValueChange={setSexo} />
                    <FormControlLabelText>Mulher</FormControlLabelText>
                </HStack>
                <Button onPress={calcularHandle} style={{backgroundColor: '#5C5346'}}>
                    <ButtonText>Calcular</ButtonText>
                </Button>
                <Text></Text>
                <Button onPress={limparHandle} style={{backgroundColor: '#5C5346'}}>
                    <ButtonText>Limpar</ButtonText>
                </Button>
                <Box justifyContent="space-between" alignItems="center" height={100} flexDirection="row">
                    <Text>Resultado</Text>
                    <Text fontWeight="$bold" style={{color: '#5C5346'}}>{resultado}</Text>
                </Box>
            </FormControl>
            <Image source={sexo ? mulher : homem} alt="imagem do tipo do sexo"/>
        </Center>
    </Box>
    </View>

}



