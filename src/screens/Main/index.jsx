import { Box, Center, FormControl, FormControlLabel, FormControlLabelText, HStack, Heading, Input, InputField, Switch, Text } from "@gluestack-ui/themed";

export default function Main() {
   
    return  <Box bg="$primary100" p="$2" h={300} w={300} borderRadius={"$md"}>
         <Center h={"$full"}>
            <Heading>Peso Ideal</Heading>
            <FormControl>
                <FormControlLabel>
                    <FormControlLabelText>
                        <Text>Peso</Text>
                    </FormControlLabelText>
                </FormControlLabel>
              <Input w={"$full"}>
              <InputField />
              </Input>
              <FormControlLabel>
                    <FormControlLabelText>
                        <Text>Altura</Text>
                    </FormControlLabelText>
                </FormControlLabel>
              <Input w={"$full"}>
              <InputField />
              </Input>

              <FormControlLabel>
                    <FormControlLabelText>
                        <Text>Sexo</Text>
                    </FormControlLabelText>
                </FormControlLabel>
              <Input w={"$full"}>
              <InputField />
              </Input>

              <HStack w={"$full"} space="md">
                <Text size="sm">Homem</Text>
                <Switch/>
                <Text size="sm">Mulher</Text>

              </HStack>

            </FormControl>
         </Center>
         </Box>
}