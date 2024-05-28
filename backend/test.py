import requests
import json
from openai import OpenAI



endpoint = 'https://api.openai.com/v1/chat/completions'
# api_key =

request_headers = {
    'Authorization': 'Bearer ' + api_key,
    'Content-Type': 'application/json',
    
}

request_body = {
    'model': 'gpt-3.5-turbo',
    'messages': [
        {'role': 'system', 
         'content': 'You are now a therapist robot. Your name is Quill. You are running on our web app as a chat bot. This is our mission statement - Revolutionising career growth and mental wellness through innovative technology, MindQuill empowers you to navigate your past and future with confidence. Use the attached file\'s questions to guide your questions. Each question you ask should tie in to one of the thematic categories, (OBS ) - Observing,  (D) - Describing, (NR) - Nonreactivity, (NJ-R) - Nonjudging, (AA-R) - Acting with Awareness. When the user responds to the question you should score the response and attach a value 1-5 to the response and add it to the total for this category. Respond in conversational tone taking into consideration their response input and score each question giving an overall score. The scoring system works based on your judgement of goal motivation and mood. Each question should be focusing on one category and asked once at a time. You should ask no more than two questions in each category. The final category total should be a running total for each one.'
        },
        {
            'role': 'user',
            'content': 'How can I improve my satsifaction at work?'                                                      
        }
    ],
    'max_tokens': 50
}

response = requests.post(endpoint, json=request_body, headers=request_headers)

if response.status_code == 200:
    response_body = response.json()
    output = response_body['choices'][0]['message']['content']
    print(output)
else:
    print('Error: ', response.status_code)