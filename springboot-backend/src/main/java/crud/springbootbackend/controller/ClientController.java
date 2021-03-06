package crud.springbootbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crud.springbootbackend.exception.ResourceNotFoundException;
import crud.springbootbackend.model.Client;
import crud.springbootbackend.repository.ClientRepository;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ClientController {

	@Autowired
	private ClientRepository clientRepository;
	
	// get all client
	@GetMapping("/client")
	public List<Client> getAllClient(){
		return clientRepository.findAll();
	}
	
	// create client rest api
	@PostMapping("/client")
	public Client createClient(@RequestBody Client client) {
		return clientRepository.save(client);
	}
	
	// get client by id rest api
	@GetMapping("/client/{id}")
	public ResponseEntity<Client> getClientById(@PathVariable Long id) {
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Client not exist with id :" + id));
		return ResponseEntity.ok(client);
	}
		
	// update client rest api
	@PutMapping("/client/{id}")
	public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client clientDetails){
		Client client = clientRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Client not exist with id :" + id));
			
		client.setName(clientDetails.getName());
		client.setCpf(clientDetails.getCpf());
		client.setBirthday(clientDetails.getBirthday());
		client.setEmail(clientDetails.getEmail());
		client.setPhone(clientDetails.getPhone());
		
		Client updatedClient = clientRepository.save(client);
		return ResponseEntity.ok(updatedClient);
		}
			
	@DeleteMapping("/client/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteClient(@PathVariable Long id){
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Client not exist with id :" + id));
		
		clientRepository.delete(client);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	
	
}
