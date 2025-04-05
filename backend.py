from flask import Flask, request, jsonify
import google.generativeai as genai
import googlemaps

app = Flask(name)

# Initialize Gemini API
GENAI_API_KEY = "your-gemini-api-key"
genai.configure(api_key=GENAI_API_KEY)

# Initialize Google Maps API
GMAPS_API_KEY = "your-google-maps-api-key"
gmaps = googlemaps.Client(key=GMAPS_API_KEY)

# Placeholder for system data
system_data = {
    "temperature": 25.0,
    "co2_captured": 0.0,
    "energy_generated": 0.0,
    "status": "Operational"
}

@app.route("/status", methods=["GET"])
def get_status():
    """Returns the current status of the Hybrid Cooling & CO₂ Capture Machine."""
    return jsonify(system_data)

@app.route("/update", methods=["POST"])
def update_data():
    """Updates system metrics like temperature, CO₂ captured, and energy generated."""
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    for key in system_data.keys():
        if key in data:
            system_data[key] = data[key]
    
    return jsonify({"message": "System data updated successfully", "data": system_data})

@app.route("/generate_insights", methods=["POST"])
def generate_insights():
    """Generates insights using Gemini AI based on system data."""
    prompt = f"Provide an analysis of the system's performance based on the following data: {system_data}"
    response = genai.generate_text(prompt=prompt)
    return jsonify({"insights": response})

@app.route("/get_location", methods=["GET"])
def get_location():
    """Fetches the location details using Google Maps API based on provided coordinates."""
    lat = request.args.get("lat")
    lon = request.args.get("lon")
    if not lat or not lon:
        return jsonify({"error": "Latitude and longitude required"}), 400
    
    reverse_geocode_result = gmaps.reverse_geocode((lat, lon))
    return jsonify({"location": reverse_geocode_result})

if name == "main":
    app.run(debug=True)