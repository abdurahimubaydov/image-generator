import { Button, Center, FormControl, Input, Text } from '@chakra-ui/react'
import React, { useState, ChangeEvent } from 'react'
import { RiAiGenerate } from "react-icons/ri";
import IValue from '../types/index';

export default function SearchSection({value, setValue, searchImage}: IValue): JSX.Element {
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await searchImage();
        // Additional logic after the image search if needed
    };

    return (
        <Center width={{base: '100%', lg: '80%'}}  padding={'10px'}>
            <form style={{width: '100%', display: 'flex'}} onSubmit={onSubmit}>
                <Input 
                    value={value}
                    onChange={onChange}
                    variant={'unstyled'}
                    color={'#F2EADF'}
                    border={'2px solid #595739'}
                    pl={5} h={'58px'} borderLeftRadius={'30px'} mr={1} w={'85%'} fontWeight={'500'}
                />
                <Button 
                    w={'15%'}
                    h={'58px'}
                    borderRightRadius={'30px'}
                    border={'2px solid #595739'}
                    backgroundColor={'inherit'}
                    _hover={{
                        bg: '#F3EADF',
                        border: 'none',
                        color: '#262521'
                    }}
                    color={'#F3EADF'}
                    fontSize={'17px'}
                    padding={'0px 7px'}
                    transition={'.2s'}
                >
                    <Center>
                        <Text display={{base: 'none', md: 'flex'}} alignItems={'center'} justifyContent={'center'}> generate <RiAiGenerate style={{marginLeft: 10}} /> </Text>  
                        <Text display={{base: 'flex', md: 'none'}}>
                            <RiAiGenerate />
                        </Text>
                    </Center>
                </Button>
            </form>
        </Center>
    )
}