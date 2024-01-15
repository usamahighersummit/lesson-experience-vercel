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
import "../src/App.css"

const App = () => {

  const lessonData= [
    {
        "title": "Introduction to RAM",
        "text": "Hi! Do you know what we’re going to learn about today? <br/> The chapter that we will begin today is called  “Organisms and their Environment.”",
        "media": ""
    },
    {
        "title": "Functions of RAM",
        "text": "In this chapter, we will be studying living things like animals and plants, and how they act in the places that they live.<br/> To start off, it is important to recall that animals and plants do not live alone, isolated from one another. Think of an animal that you know of, like a tiger. A tiger lives in a place like a forest, surrounded by other animals, as well as other living things like the trees of the forest.",
        "media": Question1
    },
    {
        "title": "Introduction to ROM",
        "text": "The tiger interacts with and affects its environment. The environment also impacts the tiger. This interaction between living things and their surroundings is studied and that study is known as Ecology. Our chapter will be all about ecology. There are a few words in ecology that we should be familiar with, so that we can understand the content ahead.",
        "media": Question1
    },
    {
        "title": "Types of ROM",
        "text": "Do you know what a habitat is? A habitat is the place where an organism lives. The habitat of the tiger is the forest.<br/> Our next word is population. A population is a group of organisms of the same species that live together in a particular habitat. For example: all the tigers in a particular forest would make the tiger population.<br/> In a habitat, there are several populations that live together and interact with one another. Together these populations form a community. In a forest, all the tigers, snakes, rabbits, trees, and rabbits would form a community.",
        "media": Question2
    },
    {
        "title": "Types of ROM",
        "text": "Now that we know what a habitat, population and community is, how would you explain the term “ecosystem”?<br/> Well, an ecosystem is the community of all the organisms living in the same area, with many habitats within that area. All the organisms are interdependent and interact with each other, together with the nonliving factors.<br/> We are now aware of how organisms live and can now begin to explore how they interact with each other.",
        "media": Question2
    },
    {
        "title": "Types of ROM",
        "text": "Organisms need energy to survive. They obtain this energy in different ways.<br/> Some organisms consume other organisms and some organisms consume plants, but it is imperative to understand that the primary and ultimate source of energy for all organisms is the sun. Without the sun, there would be no life on Earth.<br/> Firstly, the sun provides heat energy that helps keep organisms warm.<br/> The sun also provides light energy that photosynthesising organisms (like plants), convert into chemical energy. This chemical energy is passed through nutrition from one organism to another. By “nutrition”, it is meant that organisms eat the photosynthesising plants and other organisms eat those organisms. This sequence of organisms forms a food chain, but more on that later.<br/> The sun is eternal and provides a constant source of energy. This is because energy is never recycled.",
        "media": Question3
    },
    {
        "title": "Types of ROM",
        "text": "Do you know what this is?<br/> grass → grasshopper → rabbit → eagle",
        "media": Question4
    },
    {
        "title": "Types of ROM",
        "text": "This is a food chain. A food chain is a sequence of organisms starting with a photosynthesising organism (usually green plants) which are known as the primary producers. These plants convert sunlight into chemical energy through photosynthesis, creating their own food.",
        "media": Question4
    },
    {
        "title": "Types of ROM",
        "text": "The next level in the food chain includes primary consumers, which eat the plants (herbivores). Following this are the secondary consumers, typically carnivores or omnivores, that eat the herbivores. This chain can go on and on and in the simplest of terms, it represents who eats whom. ",
        "media": Question4
    },
    {
        "title": "Types of ROM",
        "text": "Each stage in a food chain is called a “trophic level” and it tells us the feeding position of an organism in the food chain.",
        "media": Question4
    }
];

const [currentIndex, setCurrentIndex] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const isFirstRender = useRef(true);
    const [isLoading, setIsLoading] = useState(false);


    const speechUtteranceRef = useRef(null);

    const speakText = (text) => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Cancel any ongoing speech
        const utterance = new SpeechSynthesisUtterance(text.replace(/(<([^>]+)>)/gi, ""));
        utterance.onstart = () => setSpeaking(true);
        utterance.onend = () => setSpeaking(false);
        speechUtteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      }
    };

    const pauseSpeech = () => {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
      }
    };
  
    const resumeSpeech = () => {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    };
  

  // Effect for initial speech synthesis
  useEffect(() => {
    const timer = setTimeout(() => {
      speakText(lessonData[currentIndex].text);
      isFirstRender.current = false;
    }, 500); // Delay of 500ms

    return () => clearTimeout(timer);
  }, []); 

  // Effect for handling changes in currentIndex
  useEffect(() => {
    if (!isFirstRender.current) {
      speakText(lessonData[currentIndex].text);
    }
  }, [currentIndex]);

  


  const nextObject = () => {
    // Check if we're not at the end of the array
    if (currentIndex < lessonData.length - 1) {
        // Show loading indicator
        setIsLoading(true);

        // Wait for 2 seconds before updating the currentIndex
        setTimeout(() => {
            // Update the currentIndex
            setCurrentIndex(currentIndex + 1);

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
  return (
    <React.Fragment>
    <section>
      <div className="custom-grid w-auto h-auto grid  text-white text-4xl md:grid-cols-2 sm:grid-cols-1 overflow-hidden">
        <LoginPageLeftSide lessonData={lessonData} currentIndex={currentIndex} previousObject={previousObject} nextObject={nextObject} speaking={speaking} speakText={speakText} isLoading={isLoading} pauseSpeech={pauseSpeech} resumeSpeech={resumeSpeech}/>
        <LoginPageRightSide lessonData={lessonData} currentIndex={currentIndex} />
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
