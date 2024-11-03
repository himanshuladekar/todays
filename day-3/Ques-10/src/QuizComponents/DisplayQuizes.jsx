import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Heading, Select, Text, Stack } from "@chakra-ui/react";
import QuizFetch from "../QuizReducer/QuizThunk/QuizFetch";

const DisplayQuizes = () => {
  const dispatch = useDispatch();

  // Get the data, loading state, and error state from the Redux store
  const { data, loading, error } = useSelector((state) => state.Quizes);

  // Fetch quizzes when the component mounts
  useEffect(() => {
    dispatch(QuizFetch());
  }, [dispatch]);

  // State to track the selected option for each quiz
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(null);

  // Handle loading state
  if (loading) {
    return <Text fontSize="xl">Loading...</Text>;
  }

  // Handle error state
  if (error) {
    return <Text fontSize="xl">Error: {error.message}</Text>;
  }

  // Handler to update selected options for each quiz
  const handleSelectChange = (quizId, selectedOption) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [quizId]: selectedOption,
    }));
  };

  // Handler to calculate and show the score
  const checkSubmit = () => {
    let calculatedScore = 0;

    data?.data?.forEach((quiz) => {
      const userAnswer = selectedOptions[quiz.id];
      if (quiz.options[quiz.correctOptionIndex] === userAnswer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
  };

  return (
    <Box p={5}>
       {/* Display score after submission */}
        {score !== null && (
          <Text fontSize="xl" mt={4}>
             <Heading mb={4}>Your Score :</Heading>  {score} / {data?.data?.length}
          </Text>
        )}

      <Stack spacing={6}>
        {/* Map through quiz data to display questions and options */}
        {data?.data?.map((quiz, index) => {
          return (
            <Box key={quiz.id} p={4} borderWidth={1} borderRadius="md">
              <Text fontSize="lg">
                <strong>Question {index + 1}: </strong>
                {quiz.question}
              </Text>

              {/* Dropdown to select options */}
              <Select
                placeholder="Select an option"
                value={selectedOptions[quiz.id] || ""}
                onChange={(e) => handleSelectChange(quiz.id, e.target.value)}
                mt={2}
              >
                {quiz.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Box>
          );
        })}

        {/* Submit button */}
        <Button colorScheme="teal" onClick={checkSubmit}>
          Submit
        </Button>

     
      </Stack>
    </Box>
  );
};

export default DisplayQuizes;
