import React, { useState, useEffect,useRef } from 'react';
import questions from './data';
import QuestionDisplay from './QuestionDisplay';
import MediaDisplay from './MediaDisplay';
import LoginPageLeftSide from './PageLeftSide'
import LoginPageRightSide from './PageRightPart'
import Question1 from './images/1.gif'
import Question2 from './images/2.jpg'
import Question3 from './images/3.gif'
import Question4 from './images/4.gif'
import parse, { domToReact } from 'html-react-parser';

import "../src/App.css"

const App = () => {


    const lessonButtonData =[
      {
      "buttonId":1,
      "buttonText":"Yes, I am aware",
      "sourceResponseId":3,
      "targetResponseId":4,
    }, {
      "buttonId":2,
      "buttonText":"No, I am not aware",
      "sourceResponseId":3,
      "targetResponseId":4,
    },
      {
      "buttonId":3,
      "buttonText":"All animals and all plants",
      "sourceResponseId":4,
      "targetResponseId":5,
    }, {
      "buttonId":4,
      "buttonText":"Animals only",
      "sourceResponseId":4,
      "targetResponseId":5,
    },
      {
      "buttonId":5,
      "buttonText":"Arthropods and flowering plants only",
      "sourceResponseId":4,
      "targetResponseId":5,
    }, {
      "buttonId":6,
      "buttonText":"Plants only",
      "sourceResponseId":4,
      "targetResponseId":5,
    },
      {
      "buttonId":6,
      "buttonText":"All animals and all plants",
      "sourceResponseId":5,
      "targetResponseId":6,
    }, {
      "buttonId":7,
      "buttonText":"Animals only",
      "sourceResponseId":5,
      "targetResponseId":6,
    },
      {
      "buttonId":8,
      "buttonText":"Arthropods and flowering plants only",
      "sourceResponseId":5,
      "targetResponseId":6,
    }, {
      "buttonId":9,
      "buttonText":"Plants only",
      "sourceResponseId":5,
      "targetResponseId":6,
    },
  ]
    const lessonResponseData= [
    {
        "responseId":1,
        "title": "Introduction to RAM",
        "text": "Hi! Do you know what we're going to learn about today? <br/> <br/> The chapter that we will begin today is called  “Organisms and their Environment.”",
        "media": Question1,
        "hasButtons": false,
        "hasNextResponse": true,
        "targetResponseId": 2,
        "sourceResponseId": null,
    },
    {
        "responseId":2,
        "title": "Functions of RAM",
        "text": "In this chapter, we will be studying living things like animals and plants, and how they act in the places that they live.<br/> <br/> To start off, it is important to recall that animals and plants do not live alone, isolated from one another. Think of an animal that you know of, like a tiger. A tiger lives in a place like a forest, surrounded by other animals, as well as other living things like the trees of the forest.",
        "media": "",
        "hasButtons": false,
        "hasNextResponse": true,
        "targetResponseId": 3,
        "sourceResponseId": 1,

    },
    {
      "responseId":3,
        "title": "Introduction to ROM",
        "text": "The tiger interacts with and affects its environment. The environment also impacts the tiger. This interaction between living things and their surroundings is studied and that study is known as Ecology. Our chapter will be all about ecology. There are a few words in ecology that we should be familiar with, so that we can understand the content ahead.",
        "media": Question1,
        "hasButtons": true,
        "hasNextResponse": false,
        "targetResponseId":4,
        "sourceResponseId":2
    },
    {
      "responseId":4,
        "title": "Types of ROM",
        "text": "Do you know what a habitat is? A habitat is the place where an organism lives. The habitat of the tiger is the forest.<br/> <br/> Our next word is population. A population is a group of organisms of the same species that live together in a particular habitat. For example: all the tigers in a particular forest would make the tiger population.<br/> <br/> In a habitat, there are several populations that live together and interact with one another. Together these populations form a community. In a forest, all the tigers, snakes, rabbits, trees, and rabbits would form a community.",
        "media": "",
        "hasButtons": true,
        "hasNextResponse": false,
        "targetResponseId":5,
        "sourceResponseId":3
    },
    {
      "responseId":5,
        "title": "Types of ROM",
        "text": "Now that we know what a habitat, population and community is, how would you explain the term “ecosystem”?<br/> <br/>  Well, an ecosystem is the community of all the organisms living in the same area, with many habitats within that area. All the organisms are interdependent and interact with each other, together with the nonliving factors.<br/> <br/> We are now aware of how organisms live and can now begin to explore how they interact with each other.",
        "media": Question2,
        "hasButtons": true,
        "hasNextResponse": false,
        "targetResponseId":6,
        "sourceResponseId":4
    },
    {
      "responseId":6,
        "title": "Types of ROM",
        "text": "Organisms need energy to survive. They obtain this energy in different ways.<br/> <br/> Some organisms consume other organisms and some organisms consume plants, but it is imperative to understand that the primary and ultimate source of energy for all organisms is the sun. Without the sun, there would be no life on Earth.<br/> <br/> Firstly, the sun provides heat energy that helps keep organisms warm.<br/> <br/> The sun also provides light energy that photosynthesising organisms (like plants), convert into chemical energy. This chemical energy is passed through nutrition from one organism to another. By “nutrition”, it is meant that organisms eat the photosynthesising plants and other organisms eat those organisms. This sequence of organisms forms a food chain, but more on that later.<br/> <br/> The sun is eternal and provides a constant source of energy. This is because energy is never recycled.",
        "media": "",
        "hasButtons": false,
        "hasNextResponse": false,
        "targetResponseId":null,
        "sourceResponseId":5
    },
    {
      "responseId":7,
        "title": "Types of ROM",
        "text": "Do you know what this is?<br/> <br/> grass → grasshopper → rabbit → eagle",
        "media": Question4
    },
    {
      "responseId":8,
        "title": "Types of ROM",
        "text": "This is a food chain. A food chain is a sequence of organisms starting with a photosynthesising organism (usually green plants) which are known as the primary producers. These plants convert sunlight into chemical energy through photosynthesis, creating their own food.",
        "media": Question4
    },
    {
      "responseId":9,
        "title": "Types of ROM",
        "text": "The next level in the food chain includes primary consumers, which eat the plants (herbivores). Following this are the secondary consumers, typically carnivores or omnivores, that eat the herbivores. This chain can go on and on and in the simplest of terms, it represents who eats whom. ",
        "media": Question4
    },
    {
      "responseId":10,
        "title": "Types of ROM",
        "text": "Each stage in a food chain is called a “trophic level” and it tells us the feeding position of an organism in the food chain.",
        "media": Question4
    }
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const isFirstRender = useRef(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedResponseButtons, setSelectedResponseButtons] = useState([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const [isSpinning, setIsSpinning] = useState(false);
  const [pauseResumeStatus, setPauseResumeStatus] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(-7.5);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const [chunkSize, setChunkSize] = useState(7.5);
  const textParts = lessonResponseData[currentIndex].text.replace(/(<([^>]+)>)/gi, "").split(/\s+/); // Split text into parts



//This is the part which is working fine with highlighter but
    const speechUtteranceRef = useRef(null);


    useEffect(()=>{
      handleCurrentResponseIndex();
    },[])
    const handleCurrentResponseIndex =()=>{
      const index = lessonResponseData.findIndex(lesson => {
        return lesson.sourceResponseId === null;
      })
      console.log("LESSON OBJECT IS: ",lessonResponseData[index]);
      console.log("LESSON INDEX IS: ",index);
      setCurrentIndex(index);
    }

    const getTextChunks = (text, chunkSize = 3) => {
      const words = text.replace(/(<([^>]+)>)/gi, "").split(/\s+/);
      const chunks = [];
    
      for (let i = 0; i < words.length; i += chunkSize) {
        chunks.push(words.slice(i, i + chunkSize).join(' '));
      }
    
      return chunks;
    };
    

    const handleRepeat = (text)=>{
      window.speechSynthesis.cancel();
      setPauseResumeStatus(true);
      setIsSpinning(true);
  speakText(text); // Your existing function call
  setTimeout(() => {
    setIsSpinning(false);
  }, 2000); 
    }
    const stripHtmlTags = (text) => {
      return text.replace(/(<([^>]+)>)/gi, "");
    };
    const speakText = (htmlText) => {
      const plainText = stripHtmlTags(htmlText); // Clean the text
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(plainText);
        // Configure the utterance (onstart, onboundary, onend, etc.)
        window.speechSynthesis.speak(utterance);
        utterance.onstart = () => {
          setSpeaking(true); // Indicate that speech synthesis has started
          setCurrentWordIndex(0); // Start highlighting from the first word
        };
        utterance.onend = () => {
          setSpeaking(false); // Indicate that speech synthesis has ended
          setCurrentWordIndex(null); // Set to null or another value that indicates no highlighting
        };
        utterance.onboundary = (event) => {
          const textUpToBoundary = stripHtmlTags(lessonResponseData[currentIndex].text).slice(0, event.charIndex).trim();
          const wordCountUpToBoundary = textUpToBoundary.split(' ').length;
          setCurrentWordIndex(wordCountUpToBoundary - 1);
        };
      }
    };
    

const renderTextWithHighlighting = () => {
  let wordCount = 0; // Counter for words to identify the current reading position

  const options = {
    replace: ({ type, data }) => {
      if (type === 'text') {
        const words = data.split(' ').map((word, index) => {
          const isFirstWord = index === 0;
          // Only highlight if currentWordIndex is not null and within the highlight range
          const isHighlighted = currentWordIndex !== null && wordCount >= currentWordIndex && wordCount < currentWordIndex + chunkSize;
          wordCount++;

          return (
            <span key={index} style={{ backgroundColor: isHighlighted ? '#7E418B' : 'transparent' }}>
              {isFirstWord ? '' : ' '}{word}
            </span>
          );
        });

        return <>{words}</>;
      }
    }
  };

  return parse(lessonResponseData[currentIndex].text, options);
};

    
    

    const pauseSpeech = () => {
      if (window.speechSynthesis.speaking) {
        setPauseResumeStatus(false);
        window.speechSynthesis.pause();
      }
    };
  
    const resumeSpeech = () => {
      if (window.speechSynthesis.paused) {
        setPauseResumeStatus(true);
        window.speechSynthesis.resume();
      }
    };
  

  // Effect for initial speech synthesis
  useEffect(() => {
    window.speechSynthesis.cancel();
    const timer = setTimeout(() => {
      speakText(lessonResponseData[currentIndex].text);
      isFirstRender.current = false;
    }, 500); // Delay of 500ms

    return () => clearTimeout(timer);
  }, []); 

  // Effect for handling changes in currentIndex
  useEffect(() => {
    window.speechSynthesis.cancel();
    if (!isFirstRender.current) {
      speakText(lessonResponseData[currentIndex].text);
    }
  }, [currentIndex]);

  


  const nextObject = () => {
    window.speechSynthesis.cancel();

    // Reset highlighter state
    setCurrentWordIndex(0);
    // Check if we're not at the end of the array
    if (currentIndex < lessonResponseData.length - 1) {
        // Show loading indicator
        setIsLoading(true);

        // Wait for 2 seconds before updating the currentIndex
        setTimeout(() => {
            // Update the currentIndex
            const index = lessonResponseData.findIndex((lesson) => lessonResponseData[currentIndex].targetResponseId === lesson.responseId);
            const selectedLesson = lessonResponseData[index];
            setSelectedAnswerIndex(-1);
            if(selectedLesson.hasButtons){
              let responseButtons = lessonButtonData.filter((button) => button.sourceResponseId === selectedLesson.responseId);
              console.log("lesson buttons: ",responseButtons);
              setSelectedResponseButtons(responseButtons);
            }else{
              setSelectedResponseButtons([]);
            }
            setCurrentIndex(index);
            // Hide loading indicator
            setIsLoading(false);
        }, 2000); // 2000 milliseconds = 2 seconds
    }
};

const previousObject = () => {
    // Check if we're not at the start of the array
    if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
    }
};

const handleSelectedAnswerIndex = (index) =>{
  setSelectedAnswerIndex(index);
}
  return (
    <React.Fragment>
    <section>
      <div className={`"w-auto h-auto grid  text-white text-4xl ${lessonResponseData[currentIndex].media === "" ? "md:grid-cols-1" :"md:grid-cols-2"}  sm:grid-cols-1 overflow-hidden"`}>
        <LoginPageLeftSide lessonResponseData={lessonResponseData} lessonButtonData={lessonButtonData} selectedResponseButtons={selectedResponseButtons} currentIndex={currentIndex} previousObject={previousObject} nextObject={nextObject} speaking={speaking} speakText={speakText} isLoading={isLoading} pauseSpeech={pauseSpeech} resumeSpeech={resumeSpeech} selectedAnswerIndex={selectedAnswerIndex} handleSelectedAnswerIndex={handleSelectedAnswerIndex} isSpinning={isSpinning} handleRepeat={handleRepeat} pauseResumeStatus={pauseResumeStatus} renderTextWithHighlighting={renderTextWithHighlighting}/>
        <LoginPageRightSide lessonResponseData={lessonResponseData} currentIndex={currentIndex} />
      </div>
    </section>
  </React.Fragment>
    // <div className="app-container">

    //   {/* <QuestionDisplay question={question.text} onSpeak={speakQuestion} />
    //   <MediaDisplay media={question.media} type={question.mediaType} /> */}
    // </div>
  );
};

export default App;
