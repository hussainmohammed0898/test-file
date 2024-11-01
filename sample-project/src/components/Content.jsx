import React, { useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { VscChromeMinimize } from "react-icons/vsc";

function Content() {
    const[isViewMore, setViewMore] = useState(true);
    const toggleReadMore = ()=>{setViewMore(!isViewMore)}

    const text = "Identify and categorize the various costs influencing margins. Costs are usually categorized as variable costs (which increase directly with an increase in sales or revenue – for example raw material costs for production), semi-variable costs (which increase with sales too, but not as linearly. For example – manpower costs for some services heavy business) and fixed costs (which are not linked to the volume of products/sales/revenue directly. For example – headquarter administration costs)."

    const[buttonClicked, setButtonClicked]= useState(false);
    const [question, setQuestion]= useState(false)

    const handleClick = ()=>{
        setButtonClicked(true);

    }
    const handleClicks = ()=>{
        setButtonClicked(false);
    }

    const displayQuestion = ()=>{
        setQuestion(true)

    }
    const displayQuestions = ()=>{
        setQuestion(false)

    }

  return (
    <div className='container'>
        <div className='side-width'></div>
        <div className='content-width'>
            <div className='card-second'>
                <div className='card-content'>
                    <p className='card-p'>Step 1</p>
                    <h2 className='heading' style={{fontSize:"20px", marginBottom:"8px"}}>Cost Identification</h2>
                    <p>{isViewMore ? text.slice(0,60):text}
                        {text.length >60 && 
                        <span className='content-span' onClick={toggleReadMore}>{isViewMore ? '...view more ↓': ""}
                        </span>
                        }
                    </p>
                </div>
                <div className='question-section'>
                <div>
                    <p className='question-p'>Question 1 out of 3</p>
                    <p className='question-bold-p'>What are the primary components of variable & semi-variable costs impacting gross margins?</p>
                </div>
                <div>
                    {!buttonClicked?(
                        <img onClick={handleClick}  className='question-img' src="data:image/svg+xml,%3csvg%20width='17'%20height='18'%20viewBox='0%200%2017%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.490234%208.94922C0.490234%208.64974%200.597656%208.39258%200.8125%208.17773C1.02734%207.95638%201.28451%207.8457%201.58398%207.8457H7.57031V1.86914C7.57031%201.56966%207.67773%201.3125%207.89258%201.09766C8.10742%200.882812%208.36458%200.775391%208.66406%200.775391C8.97005%200.775391%209.23047%200.882812%209.44531%201.09766C9.66016%201.3125%209.76758%201.56966%209.76758%201.86914V7.8457H15.7441C16.0436%207.8457%2016.3008%207.95638%2016.5156%208.17773C16.7305%208.39258%2016.8379%208.64974%2016.8379%208.94922C16.8379%209.25521%2016.7305%209.51562%2016.5156%209.73047C16.3008%209.9388%2016.0436%2010.043%2015.7441%2010.043H9.76758V16.0391C9.76758%2016.332%209.66016%2016.5859%209.44531%2016.8008C9.23047%2017.0156%208.97005%2017.123%208.66406%2017.123C8.36458%2017.123%208.10742%2017.0156%207.89258%2016.8008C7.67773%2016.5859%207.57031%2016.332%207.57031%2016.0391V10.043H1.58398C1.28451%2010.043%201.02734%209.9388%200.8125%209.73047C0.597656%209.51562%200.490234%209.25521%200.490234%208.94922Z'%20fill='black'%20fill-opacity='0.5'/%3e%3c/svg%3e" alt="" /> 
                    ):(<img  onClick={handleClicks} className='question-img' src="data:image/svg+xml,%3csvg%20width='17'%20height='4'%20viewBox='0%200%2017%204'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57422%203.0625C1.38542%203.0625%201.20964%203.01367%201.04688%202.91602C0.884115%202.81185%200.750651%202.67839%200.646484%202.51562C0.542318%202.34635%200.490234%202.16081%200.490234%201.95898C0.490234%201.76367%200.542318%201.58138%200.646484%201.41211C0.750651%201.24284%200.884115%201.10938%201.04688%201.01172C1.20964%200.914062%201.38542%200.865234%201.57422%200.865234H15.7441C15.9329%200.865234%2016.1087%200.914062%2016.2715%201.01172C16.4408%201.10938%2016.5742%201.24284%2016.6719%201.41211C16.776%201.58138%2016.8281%201.76367%2016.8281%201.95898C16.8281%202.16081%2016.776%202.34635%2016.6719%202.51562C16.5742%202.67839%2016.4408%202.81185%2016.2715%202.91602C16.1087%203.01367%2015.9329%203.0625%2015.7441%203.0625H1.57422Z'%20fill='black'%20fill-opacity='0.5'/%3e%3c/svg%3e" alt="" />)}
                    
                </div>
            </div>
            {buttonClicked===true?(
                <div className='option-section'>
                    <div className='sub-section'>
                    <div className='third-section'>
                    <p className='section-q'>
                    Need more clarification on the section?
                    </p >
                    {!question ?(
                        <IoMdAddCircle onClick={displayQuestion} className='icon-add' />

                    ):(
                        <VscChromeMinimize onClick={displayQuestions}   className='icon-add' />

                    )}
                    </div>
                    {question===true ?(
                        <div className='question-add'>
                            How do I connect this to my business context?
                        </div>
                    ):""}
                    </div>
                    <div className='sub-section'>
                    <div className='third-section'>
                    <p className='section-q'>Need more clarification on the section?
                    </p>
                    <IoMdAddCircle  className='icon-add' />
                    </div>
                    <div>
                        hello
                    </div>
                    </div>
                    
                </div>

            ):""}

            </div>
        </div>
        <p></p>
    </div>

  )
}

export default Content