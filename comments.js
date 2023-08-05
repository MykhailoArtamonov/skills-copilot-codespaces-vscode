// Create web server
app.post('/comments', (req, res) => {
    // Get the comment from the request body
    let comment = req.body;
    // Add the comment to the data store
    comments.push(comment);
    // Return the added comment
    res.json(comment);
});