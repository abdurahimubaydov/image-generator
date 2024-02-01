import { Box } from "@chakra-ui/react";
import SearchSection from "./components /search-section";
import { ImageSection } from "./components /image-section";
import OpenAi from 'openai'
import React, { useEffect, useState } from "react";

export default function App(): JSX.Element {
  const [data, setData] = useState<string>();

  const [value, setValue] = useState<string>('a cat standing at the beach');
  const [loading, setLoading] = useState<boolean>(false);

  const openai = new OpenAi({apiKey: process.env.REACT_APP_API_KEY, dangerouslyAllowBrowser: true})

  const getImage = async (): Promise<void> => {
    setLoading(true)
    try {
      const image = await openai.images.generate(
        { model: "dall-e-2", prompt: value }
      );
      setLoading(false)
      setData(image.data[0].url)
    } catch (error) {
      console.log(error)
    }
  };


  useEffect(() => {
    getImage()
  }, [])


  const searchImage = async (): Promise<void> => {
    try {
      await getImage()
    } catch (error) {
      console.error("Error searching image:", error);    
    }
  };
  
  console.log(value)

  return (
    <Box
      w={'100%'} 
      height={'100vh'} 
      bgColor={'#262521'}
      display={'flex'}
      alignItems={'center'}
      pt={10}
      flexDirection={'column'}
    > 
      <SearchSection 
        value={value} 
        setValue={setValue} 
        searchImage={searchImage}
      />
      <ImageSection 
        url={data?.toString()} 
        loading={loading} 
        value={value}
      />
    </Box>
  );
};
