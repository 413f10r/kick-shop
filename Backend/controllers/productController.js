import connection from "../data/db.js";

function index(req, res) {
  const productSql = 'SELECT * FROM products';
  const imagesSql = 'SELECT * FROM images WHERE product_id = ?';
  const sizesSql = 'SELECT * FROM sizes WHERE product_id = ?';

  connection.query(productSql, (err, products) => {
    if (err) {
      return res.status(500).json({ error: 'Errore lato server nella funzione INDEX' });
    }

    if (products.length === 0) {
      return res.status(404).json({ error: 'Nessun prodotto trovato' });
    }

    let count = 0;
    products.forEach((product, index) => {
      connection.query(imagesSql, [product.id], (err, imagesResults) => {
        if (err) {
          return res.status(500).json({ error: 'Errore lato server nel recupero immagini' });
        }
        product.images = imagesResults.map((image, idx) => ({
          ...image,
          image_url: `${req.imagePath}${product.slug}-${idx + 1}.webp`,
        }));

        connection.query(sizesSql, [product.id], (err, sizesResults) => {
          if (err) {
            return res.status(500).json({ error: 'Errore lato server nel recupero taglie' });
          }
          product.sizes = sizesResults;
          count++;

          if (count === products.length) {
            res.json(products);
          }
        });
      });
    });
  });
}

function show(req, res) {
  const { slug } = req.params;
  const productSql = 'SELECT * FROM products WHERE slug = ?';
  const imagesSql = 'SELECT * FROM images WHERE product_id = ?';
  const sizesSql = 'SELECT * FROM sizes WHERE product_id = ?';


  connection.query(productSql, [slug], (err, productResults) => {
    if (err) {
      return res.status(500).json({ error: 'Errore lato server nella funzione SHOW' });
    }

    if (productResults.length === 0) {
      return res.status(404).json({ error: 'Prodotto non trovato' });
    }

    const product = productResults[0];

    connection.query(imagesSql, [product.id], (err, imagesResults) => {
      if (err) {
        return res.status(500).json({ error: 'Errore lato server nel recupero immagini' });
      }
      product.images = imagesResults.map((image, idx) => ({
        ...image,
        image_url: `${req.imagePath}${product.slug}-${idx + 1}.webp`,
      }));

      connection.query(sizesSql, [product.id], (err, sizesResults) => {
        if (err) {
          return res.status(500).json({ error: 'Errore lato server nel recupero taglie' });
        }
        product.sizes = sizesResults;
        res.json(product);
      });
    });
  });
}

function storeOrder(req, res) {
  const {
    userName,
    userSurname,
    userEmail,
    addressShipping,
    addressInvoice,
    telephone,
    city,
    province
  } = req.body;

  const sql = `
    INSERT INTO orders (
      user_name, 
      user_surname,
      user_email,
      address_shipping,
      address_invoice,
      telephone,
      city,
      province
    ) VALUES (?,?,?,?,?,?,?,?);
  `;

  connection.query(sql, [userName, userSurname, userEmail, addressShipping, addressInvoice, telephone, city, province], (err, results) => {
    if (err) {
      return res.status(500).json({
        error: 'Errore nel database',
        details: err.message
      });
    }
    res.status(201).json({
      status: "success",
      message: "Ordine aggiunto con successo",
      orderId: results.insertId
    });
  });
}


export { index, show, storeOrder };