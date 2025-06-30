<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (isset($input['data'])) {
        $jsContent = "const teacherDataByDay = " . json_encode($input['data'], JSON_PRETTY_PRINT) . ";";
        
        if (file_put_contents('data.js', $jsContent)) {
            echo json_encode(['success' => true, 'message' => 'Data updated successfully']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to write file']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'No data provided']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>