-- Inserir categorias fictícias
INSERT INTO categories (category_name) VALUES
    ('Eletrônicos'),
    ('Roupas'),
    ('Livros'),
    ('Móveis'),
    ('Alimentos');

-- Inserir dados de produtos fictícios
INSERT INTO products (product_title, product_price, product_description, product_image, product_rate, product_count, category_id) VALUES
    ('Smartphone X1', 599.99, 'Um smartphone avançado com ótima câmera.', 'smartphone_x1.jpg', 4.5, 100, 1),
    ('Camiseta Casual', 29.99, 'Uma camiseta confortável para uso diário.', 'camiseta_casual.jpg', 4.0, 200, 2),
    ('Livro Aventuras Fantásticas', 19.99, 'Um livro emocionante de aventuras.', 'livro_aventuras.jpg', 4.8, 50, 3),
    ('Sofá de Couro', 799.99, 'Um sofá de couro elegante para a sala de estar.', 'sofa_couro.jpg', 4.2, 10, 4),
    ('Arroz Integral', 3.99, 'Pacote de 1kg de arroz integral.', 'arroz_integral.jpg', 4.7, 500, 5);

-- Inserir dados de usuários fictícios
INSERT INTO users (user_email, user_username, user_password, user_name, user_phone, user_city, user_street, user_number, user_cep) VALUES
    ('usuario1@email.com', 'user1', 'senha123', 'João Silva', '123-456-7890', 'São Paulo', 'Rua A', 123, '12345678'),
    ('usuario2@email.com', 'user2', 'senha456', 'Maria Souza', '987-654-3210', 'Rio de Janeiro', 'Avenida B', 456, '54321876');

-- Inserir dados de carrinhos fictícios
INSERT INTO carts (user_id, cart_date, cart_status) VALUES
    (1, NOW(), 1),
    (2, NOW(), 1);

-- Inserir produtos nos carrinhos fictícios
INSERT INTO cart_products (cart_products_quantity, cart_id, product_id) VALUES
    (2, 1, 1),
    (3, 1, 2),
    (1, 2, 3);