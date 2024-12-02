
export const fetchAllQuizData = async () => {
  try {
    const response = await fetch('http://localhost:8000/quiz');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const result = await response.json();
   return result
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const saveQuizData = async (quizData) => {
  try {
    const response = await fetch('http://localhost:8000/quiz', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quizData), 
    });

    if (!response.ok) {
      throw new Error('Failed to save quiz data');
    }

    const result = await response.json();
    return result; 
  } catch (error) {
    console.error('Error saving quiz data:', error);
    throw error;
  }
};
