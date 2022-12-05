import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
   
  Avatar,
  
  Center,
  Image,
 

  Stack,
 
  useColorModeValue,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';



  
  export default function Flight() {
//     Origin city
// 	Destination city
// 	Departure date
// 	Return date
// 	Departure time
// 	Arrival time
// 	Price
    const [data, setData] = useState([])

const [cat, setCat] = useState([])
    const [name,setName] = useState("")
    const [originCity, setOriginCity] = useState("")
    const [departureDate, setDepartureDate] = useState("")
    const [destinationCity, setDestinationCity] = useState("")
    const [ReturnDate, setReturnDate] = useState("")
    const [DepartureTime, setDepartureTime] = useState("")
    const [arrivalTime, setArrivalTime] = useState("")
    const [price, setPrice] = useState("")
    const [q,setQ] = useState("")

   



console.log("name",name)

    const handleGetData = ()=>{
      console.log("nameeee",name)


        axios({
           method:"GET",
           url:"http://localhost:9090/results",
           params:{
            //  name:`${name}`
             q:`${q}`
           }
        })
        .then((res)=>{
          setData(res.data)
        })
        .then((error)=>{
    
        })
    }
    
    
    // const handleclick = (e) => {

    //    let option = {
    //     name,
    //     price,
    //     originCity,
    //     departureDate,
    //     destinationCity,
    //     ReturnDate,
    //     DepartureTime,
    //     arrivalTime
    //    }       

    //      option = e.target.value;
    //     let newCat = [...cat]

    //     if (cat.includes(option)) {
    //         newCat.splice(newCat.indexOf(option), 1);
    //     }
    //     else {
    //         newCat.push(option);
    //     }
    //     setCat(newCat)
    // }



    // let filterData;
    // let fdata = []

    // if(cat.length===0){
    //     fdata = data
    // }

    // for(let i=0; i<cat.length; i++){
    //     filterData =   data.filter((item)=>{
    //          return item.type === cat[i]
    //      })
    //   fdata = [...fdata, ...filterData]
      
    //  }

    //  console.log("fdatta", fdata)
    //  console.log("fdatta", fdata)
    
//     useEffect(()=>{
// handleGetData()
//     },[])
    
   
    
    console.log("data",data)
    // console.log("name",name)
    // console.log("Origin City",originCity)

    return (
      <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Book your Tickets</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to get details.
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                          +91-988888888
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          hello@abc.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          Karnavati, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7"
                           onChange={(e)=>setQ(e.target.value)}
                          >
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                             
                            />
                            




{/* 	Name
	Origin city
	Destination city
	Departure date
	Return date
	Departure time
	Arrival time
	Price */}

                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>	Origin city</FormLabel>
                          <InputGroup borderColor="#E0E1E7"
                          onChange={(e)=>setQ(e.target.value)}
                          >
                            <InputLeftElement
                              pointerEvents="none"
                              
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>


                        <FormControl id="name">
                          <FormLabel>	Destination city</FormLabel>
                          <InputGroup borderColor="#E0E1E7"
                            onChange={(e)=>setQ(e.target.value)}
                          >
                            <InputLeftElement
                              pointerEvents="none"
                            
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>





                        <FormControl id="name">
                          <FormLabel>	Departure date</FormLabel>
                          <InputGroup borderColor="#E0E1E7"
                             onChange={(e)=>setQ(e.target.value)}
                          >
                            <InputLeftElement
                              pointerEvents="none"
                           
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>




                        <FormControl id="name">
                          <FormLabel>	Return Date</FormLabel>
                          <InputGroup borderColor="#E0E1E7"
                          onChange={(e)=>setQ(e.target.value)}
                          type="date"
                          >
                            <InputLeftElement
                              pointerEvents="none"
                              type="date"
                              
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>



                        <FormControl id="name">
                          <FormLabel>Departure Time</FormLabel>
                          <InputGroup borderColor="#E0E1E7"
                          
                          onChange={(e)=>setQ(e.target.value)}
                          >
                            <InputLeftElement
                              pointerEvents="none"
                              type="time"
                              
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>



                        <FormControl id="name">
                          <FormLabel>Arrival Time</FormLabel>
                          <InputGroup borderColor="#E0E1E7"
                           onChange={(e)=>setQ(e.target.value)}
                          >
                            <InputLeftElement
                              pointerEvents="none"
                             
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <FormLabel>Price</FormLabel>
                          <InputGroup borderColor="#E0E1E7"
                           onChange={(e)=>setQ(e.target.value)}
                          >
                            <InputLeftElement
                              pointerEvents="none"
                             
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>

                        
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}} 
                            onClick={handleGetData}
                            >
                            Check
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem>

                  {/* //----------------------------// */}

                  {data.map((item)=>(

                 
                  <Box key={item.id} py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://jundroo.blob.core.windows.net/simpleplanes/GameData/aircraft/924/7r6MDw-UserView-0.png'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {item.name}
            </Heading>
            <Text color={'gray.500'}>{item.OriginCity}</Text>
          </Stack>


          {/* "price": 8200.546727940671,
          "originCity": "Chandigarh",
          "destinationCity": "Indore",
          "departureDate": "16/2/2020",
          "departureTime": "23:8" */}

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>Destination City</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                {item.destinationCity}
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>Destination Departure</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                {item.departureDate}
              </Text>
            </Stack>
          </Stack>
          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>Departure Date</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                {item.departureDate}
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>Departure Time</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                {item.departureTime}
              </Text>
            </Stack>
          </Stack>
<Stack>
    
</Stack>

          <Button
            w={'full'}
            mt={8}
            bg={('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            onClick={()=>alert("Ticket Boocked")}
            >
            Book Ticket
          </Button>
        </Box>
      </Box>
    </Box>
 ))}
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }

