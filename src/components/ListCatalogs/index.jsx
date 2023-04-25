import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import {View, Text, HStack, Box, AspectRatio, Center, Stack, Heading} from "native-base";
import {Dimensions} from "react-native";
import {memo} from "react";
function ListItems({row={}}) {
    //console.log(row)
    if (row.catalog===undefined){
        return (
            <></>
        )
    }
    return (
        <Collapse>
            <CollapseHeader>
                <Box w={Dimensions.get('window').width-20}>
                    <Box w="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                    }} _web={{
                        shadow: 2,
                        borderWidth: 0
                    }} _light={{
                        backgroundColor: "gray.50"
                    }}>
                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Heading size="md" ml="-1">
                                    {row.data.catalogName}
                                </Heading>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </CollapseHeader>
            <CollapseBody>
                <Text>Ta daa!</Text>
            </CollapseBody>
        </Collapse>
    )
}

export default ListItems