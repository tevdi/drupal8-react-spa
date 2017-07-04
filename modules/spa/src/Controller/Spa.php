<?php

namespace Drupal\spa\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\node\Entity\Node;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Drupal\Component\Serialization\Json;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use GuzzleHttp\Client;

/**
 * Class Spa.
 *
 * @package Drupal\spa\Controller
 */

class Spa extends ControllerBase {

    public function getRest($id = null, $rest_url = null) {        
        
        $serializer = \Drupal::service('serializer');        
        $client = new Client();
        $res = $client->request('GET', $rest_url.'/'.$id);
        if($res->getStatusCode() === 200) {
            $data = $serializer->normalize(json_decode($res->getBody(), true));
        }        
        
        return new JsonResponse($data);
    }  
      
    public function Render_Player_s(Request $request, $id = null) {
        global $base_url;
        global $base_path; 
        $request_players = $this->getRest($id, $base_url.'/rest/getPlayers');
        $players = json_decode($request_players->getContent(), true);
        $props = [
            'players' => $players,
            'baseUrl' => $base_path,                        
            'location' => $request->getRequestUri()
        ];          
        return [
            '#theme' => 'spa',
            '#props' => $props,
            '#attached' => [
                'drupalSettings' => [
                ],
                'library' => [
                    'spa/ClientBundle'
                ],
            ],
        ];
    }
        
    public function insertPlayer(){
        $data  = json_decode(file_get_contents('php://input'), true); 
        $node = Node::create(array(
            'type' => 'players',
            'title' => $data['player']['name'],
            'langcode' => 'en',
            'status' => 1,
            'field_name' => $data['player']['name'],
            'field_email' => $data['player']['email'],
            'field_id' => 1,    /* It somehow overrides this 1 value. */
        ));
        $node->save();   
        return new Response();
    }
}
