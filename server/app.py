from flask import Flask, request
from dotenv import load_dotenv
from os import environ
import requests
import math

load_dotenv()

app = Flask(__name__)

@app.route("/titles")
def search_titles():

    query = request.args.get("query")
    page = request.args.get("page", 1)

    res = requests.get("https://api.themoviedb.org/3/search/multi", params={
        "api_key": environ.get("TMDB_API_KEY"),
        "query": query,
        "page": page
    })

    json = res.json()

    return dict(
        page=json["page"],
        results=[result for result in json["results"] if result["media_type"] in ["movie", "tv"]],
        total_pages=json["total_pages"]
    )

@app.route("/sources")
def search_sources():

    query = request.args.get("query")