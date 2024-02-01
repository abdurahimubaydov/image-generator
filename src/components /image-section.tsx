import { Box, Button, Center, Image, Skeleton } from '@chakra-ui/react'
import { MdDownload } from "react-icons/md";
import { saveAs } from 'file-saver';

interface IIMage {
  url: string | undefined,
  loading: boolean
}

export const ImageSection = ({ url, loading } : IIMage ): JSX.Element => {

  const downloadImage = async () => {
    const imageUrl: string = 'https://images3.alphacoders.com/109/1090280';
    const imageName: string = 'downloaded_image.jpg';
    saveAs(imageUrl, imageName)
  };


  return !loading ? (
   <Center width={{base: '100%', lg: '80%'}} padding={'10px'} flexDirection={'column'}>
        <Image 
            src={url} 
            w={'100%'}
            h={'70vh'}
            borderRadius={'30px'}
            objectFit={'cover'}
            mb={'15px'}
        />
        <Box width={'100%'} display={'flex'} justifyContent={'flex-end'}> 
            <Button bg={'#595738'} _hover={{}} _active={{}} color={'#F3EADF'}
              onClick={() => downloadImage()}
            >Download image <MdDownload /></Button>
        </Box>
    </Center>
  ): (
    <Box width={{base: '100%', lg: '80%'}} h={'70vh'}>
      <Skeleton 
        width={'100%'} 
        height={'100%'} 
        borderRadius={'30px'} 
      />
    </Box>
  )
}
