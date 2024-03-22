from flask import Flask, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

@app.route('/getall', methods=['GET'])
def get_all_products():
    products = [
        {"nome": "Produto 1", "descricao": "Descrição do Produto 1", "valor": 10.99},
        {"nome": "Produto 2", "descricao": "Descrição do Produto 2", "valor": 12.89},
        {"nome": "Produto 3", "descricao": "Descrição do Produto 3", "valor": 3.78},
        {"nome": "Produto 4", "descricao": "Descrição do Produto 4", "valor": 2.78},
        {"nome": "Produto 5", "descricao": "Descrição do Produto 5", "valor": 3.89},
        {"nome": "Produto 6", "descricao": "Descrição do Produto 6", "valor": 6.90},
        {"nome": "Produto 7", "descricao": "Descrição do Produto 7", "valor":4.56},
        {"nome": "Produto 8", "descricao": "Descrição do Produto 8", "valor":8.89},
        {"nome": "Produto 9", "descricao": "Descrição do Produto 9", "valor":7.78},
        {"nome": "Produto 10", "descricao": "Descrição do Produto 10", "valor":6.45},
        {"nome": "Produto 11", "descricao": "Descrição do Produto 11", "valor":12.35},
        {"nome": "Produto 12", "descricao": "Descrição do Produto 12", "valor":14.25}   
    ]
    return jsonify(products)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
