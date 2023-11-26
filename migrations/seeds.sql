-- Inserir categorias fictícias
INSERT INTO categories (category_name) VALUES
    ('Eletrônicos'),
    ('Roupas'),
    ('Livros'),
    ('Móveis'),
    ('Alimentos');


INSERT INTO products (product_title, product_price, product_description, product_image, product_rate, product_count, category_id) VALUES
    ('Smartphone X1', 599.99, 'Um smartphone avançado com ótima câmera.', 'smartphone_x1.jpg', 4.5, 100, 1),
    ('Camiseta Casual', 29.99, 'Uma camiseta confortável para uso diário.', 'camiseta_casual.jpg', 4.0, 200, 2),
    ('Livro Aventuras Fantásticas', 19.99, 'Um livro emocionante de aventuras.', 'livro_aventuras.jpg', 4.8, 50, 3),
    ('Sofá de Couro', 799.99, 'Um sofá de couro elegante para a sala de estar.', 'sofa_couro.jpg', 4.2, 10, 4),
    ('Arroz Integral', 3.99, 'Pacote de 1kg de arroz integral.', 'arroz_integral.jpg', 4.7, 500, 5);


INSERT INTO users (user_email, user_username, user_password, user_name, user_phone, user_city, user_street, user_number, user_cep) VALUES
    ('usuario1@email.com', 'user1', 'senha123', 'João Silva', '123-456-7890', 'São Paulo', 'Rua A', 123, '12345678'),
    ('usuario2@email.com', 'user2', 'senha456', 'Maria Souza', '987-654-3210', 'Rio de Janeiro', 'Avenida B', 456, '54321876');


INSERT INTO carts (user_id, cart_date, cart_status) VALUES
    (1, NOW(), 1),
    (2, NOW(), 1);


INSERT INTO cart_products (cart_products_quantity, cart_id, product_id) VALUES
    (2, 1, 1),
    (3, 1, 2),
    (1, 2, 3);

    INSERT INTO products (product_title, product_price, product_description, product_image, product_rate, product_count, category_id) VALUES
    ('Produto 1', 49.99, 'Descrição do Produto 1', 'produto1.jpg', 3.5, 30, 1),
    ('Produto 2', 79.99, 'Descrição do Produto 2', 'produto2.jpg', 4.0, 25, 2),
    ('Produto 3', 39.99, 'Descrição do Produto 3', 'produto3.jpg', 4.5, 40, 3),
    ('Produto 4', 89.99, 'Descrição do Produto 4', 'produto4.jpg', 4.2, 22, 4),
    ('Produto 5', 19.99, 'Descrição do Produto 5', 'produto5.jpg', 3.8, 35, 5),
    ('Produto 6', 129.99, 'Descrição do Produto 6', 'produto6.jpg', 4.7, 18, 1),
    ('Produto 7', 59.99, 'Descrição do Produto 7', 'produto7.jpg', 4.1, 27, 2);