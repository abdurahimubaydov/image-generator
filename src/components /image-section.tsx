import { Box, Button, Center, Image, Skeleton } from '@chakra-ui/react'
import { MdDownload } from "react-icons/md";
import { saveAs } from 'file-saver';

interface IIMage {
  url: string | undefined,
  loading: boolean,
  value: string
}

export const ImageSection = ({ url, loading, value } : IIMage ): JSX.Element => {

  return !loading ? (
   <Center width={{base: '100%', lg: '80%'}} padding={'10px'} flexDirection={'column'}>
        <Image 
            src={url} 
            w={'100%'}
            h={'70vh'}
            borderRadius={'30px'}
            mb={'15px'}
        />
    </Center>
  ): (
    <Box width={{base: '100%', lg: '80%'}} h={'70vh'} p='10px'>
      <Skeleton 
        width={'100%'} 
        height={'100%'} 
        borderRadius={'30px'} 
      />
    </Box>
  )
}
