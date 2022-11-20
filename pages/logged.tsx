import { Button, Center, Container, Flex, Text} from "@chakra-ui/react"
import { getSession, signOut } from "next-auth/react"

function LoggedPage({ session }) {
    console.log(">>> session", session)
    return( 
        <Container py="64px">
            <Center>
                <Flex flexDirection="column">
                <Text mb="24px">Welcome back {session.user.name}! 👋</Text>
                <Button onClick={() => signOut()}>Log out</Button>
                </Flex> 
           </Center>
        </Container>
    )
}

export default LoggedPage

export async function getServerSideProps({ req, res}) {
    
    const session = await getSession({ req })
    console.log(">>>session", session)

    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    }

    return {
        props: {
            session,
        },
    }
}