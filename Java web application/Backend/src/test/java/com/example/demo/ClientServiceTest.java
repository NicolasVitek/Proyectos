package com.example.demo;
import com.example.demo.model.Client;
import com.example.demo.services.ClientService;
import com.example.demo.repositories.IClientRepositoy;
import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.junit.runner.RunWith;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class ClientServiceTest {
    
    @Mock
    private IClientRepositoy clientRepository;

    @InjectMocks
    private ClientService clientService;
    private Client client;
    
    @Before
    public void setUp() {
        client = new Client();
        client.setUserName("Nicolas");
        when(clientRepository.getByUserName("Nicolas")).thenReturn(client);
    }
    @Test
    public void testGetClientByUserName() {
        Client result = clientService.getClientByUserName("Nicolas");
        assertNotNull(result);
        assertEquals("Nicolas", result.getUserName());
        verify(clientRepository).getByUserName("Nicolas");
    }
}