import React, { useState } from "react";

const App = ({ suggestions = ["Mumbai", "Bangalore", "Hyderabad", "Ahmedabad", "Navi Mumbai", "Jammu", "Jaipur", "Jabalpur", "Vijayawada", "Jalandhar", "Ajmer"] }) => {

  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const userInput = e.target.value; // Get the current input value
    setInputValue(userInput); // Update the input value

    if (userInput.trim() !== "") {
      const filtered = suggestions.filter((suggestion) => suggestion.toLowerCase().startsWith(userInput.toLowerCase()));
      setFilteredSuggestions(filtered); // Update the filtered suggestions
      setShowSuggestions(true); // Show the suggestions dropdown
    } else {
      setFilteredSuggestions([]); // Clear suggestions if input is empty
      setShowSuggestions(false); // Hide the suggestions dropdown
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion); // Set the input value to the clicked suggestion
    setFilteredSuggestions([]); // Clear the filtered suggestions
    setShowSuggestions(false); // Hide the suggestions dropdown
  }



  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <div style={{ marginBottom: "5px", fontSize: "16px" }}>
        Search cities of India:

        <input 
          type="text"
          value={inputValue}
          onChange={handleChange}
          style={{ width: "300px", padding: "10px", fontSize: "16px", border: "1px solid #000", borderRadius: "4px", outline: "none" }}
        />

        {showSuggestions && inputValue && (
          <ul style={{ listStyle: "none", padding: "0", margin: "0", width: "322px", border: "1px solid #ccc", borderTop: "none", maxHeight: "200px", overflow: "auto", boxShadow: "0 4px 6px rgba(0,0,0,0.1"           
          }}
          >

            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((suggestion, index) => (
                <li key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                onMouseEnter={(e) => { e.target.style.backgroundColor = "#0f8a4e"; e.target.style.color = "white"; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "black"; }}
                style={{ padding: "10px", cursor: "pointer", borderBottom: "1px solid #eee" }}
                >
                  {suggestion}
                </li>
              ))
            ) : (
              <li style={{ padding: "10px", color: "#999" }}>
                No suggestions found
              </li>
            )}

          </ul>
        )}
      </div>

    </div>
  )
}

export default App;