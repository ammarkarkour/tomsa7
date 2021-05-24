import React from 'react';
import Remarkable from 'remarkable';
import { Box, Textarea, Text, HStack, VStack  } from "@chakra-ui/react";

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: ''};
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
	    <>
        <VStack spacing="10px">
          
          <HStack spacing="275px">
            <Text fontSize="30px" color="black">
              Input
            </Text>

            <Text fontSize="30px" color="black">
              Output
            </Text>
          </HStack>

          <HStack spacing="50px">
            <Textarea
              w="300px"
              h="200px"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Input please!"
              size="md"
            />

    	      <Box bg="#68D391" w="300px" h="200px" p={4} color="white">
      	      <div
                className="content"
                dangerouslySetInnerHTML={this.getRawMarkup()}
      	      />
      		  </Box>
          </HStack>
        
        </VStack>

	    </>
    );
  }
}


export default MarkdownEditor;