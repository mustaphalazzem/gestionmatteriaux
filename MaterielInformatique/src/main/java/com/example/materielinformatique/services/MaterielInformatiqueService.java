package com.example.materielinformatique.services;

import com.example.materielinformatique.dto.InventaireDTO;
import com.example.materielinformatique.entity.MaterielInformatique;
import com.example.materielinformatique.entity.SituationC;
import com.example.materielinformatique.entity.TypeMateriel;
import com.example.materielinformatique.repositories.MaterielInformatiqueRepository;
import com.example.materielinformatique.repositories.SituationCRepository;
import com.example.materielinformatique.repositories.TypeMaterielRepository;
import com.example.materielinformatique.dto.InventairetDTO;
import com.example.materielinformatique.dto.UpdateMaterielDTO;
import com.example.materielinformatique.dto.InventairesDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.Map;

@Service
public class MaterielInformatiqueService {

    @Autowired
    private MaterielInformatiqueRepository materielInformatiqueRepository;
    @Autowired
    private TypeMaterielRepository typeMaterielRepository;
    @Autowired
    private SituationCRepository situationRepository;

    public List<MaterielInformatique> findAll() {
        return materielInformatiqueRepository.findAll();
    }

    public Optional<MaterielInformatique> findById(String id) {
        return materielInformatiqueRepository.findById(id);
    }
    public long getCountOfMaterielInformatique() {
        return materielInformatiqueRepository.countMaterielInformatique();
    }
    public MaterielInformatique save(MaterielInformatique materielInformatique) {
        if (materielInformatique.getCode() == null) {
            materielInformatique.setCode(generateCode());
        }
        return materielInformatiqueRepository.save(materielInformatique);
    }

    public void deleteById(String id) {
        materielInformatiqueRepository.deleteById(id);
    }

    public Optional<MaterielInformatique> findLastMaterielForDate(String datePart) {
        List<MaterielInformatique> materiels = materielInformatiqueRepository.findMaterielsForDate(datePart);
        if (!materiels.isEmpty()) {
            return Optional.of(materiels.get(0));
        }
        return Optional.empty();
    }

    private String generateCode() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        String datePart = sdf.format(new Date());

        Optional<MaterielInformatique> lastMaterielOptional = findLastMaterielForDate(datePart);

        int rank = 1;
        if (lastMaterielOptional.isPresent()) {
            String lastCode = lastMaterielOptional.get().getCode();
            String lastRankStr = lastCode.substring(lastCode.length() - 3);
            rank = Integer.parseInt(lastRankStr) + 1;
        }

        String rankPart = String.format("%03d", rank);
        return datePart + rankPart;
    }

    public List<InventaireDTO> getInventaireParModel() {
        return materielInformatiqueRepository.findInventaireParModel();
    }

    public List<InventairetDTO> getInventaireParTypeMateriel() {
        return typeMaterielRepository.findInventaireParTypeMateriel();
    }

    public List<InventairesDTO> getInventaireParSituation() {
        return situationRepository.findInventaireParSituation();
    }
     public Map<Integer, List<MaterielInformatique>> getMaterielsGroupedByYear() {
        List<MaterielInformatique> allMateriels = materielInformatiqueRepository.findAll();

        Map<Integer, List<MaterielInformatique>> groupedByYear = (Map<Integer, List<MaterielInformatique>>) allMateriels.stream()
            .collect(Collectors.groupingBy(materiel -> {
                Date dateAjout = materiel.getDateAjout();
                Calendar calendar = Calendar.getInstance();
                calendar.setTime(dateAjout);
                return calendar.get(Calendar.YEAR);
            }));

        return groupedByYear;
    }
     public MaterielInformatique updateMateriel(String code, UpdateMaterielDTO updateMaterielDTO) {
        Optional<MaterielInformatique> materielOptional = materielInformatiqueRepository.findById(code);

        if (materielOptional.isPresent()) {
            MaterielInformatique materiel = materielOptional.get();

            // Mettre à jour le type de matériel
            if (updateMaterielDTO.getTypeMaterielId() != null) {
                Optional<TypeMateriel> typeMaterielOptional = typeMaterielRepository.findById(updateMaterielDTO.getTypeMaterielId());
                typeMaterielOptional.ifPresent(materiel::setTypeMateriel);
            }

            // Mettre à jour la situation
            if (updateMaterielDTO.getSituationId() != null) {
                Optional<SituationC> situationOptional = situationRepository.findById(updateMaterielDTO.getSituationId());
                situationOptional.ifPresent(materiel::setSituation);
            }

            return materielInformatiqueRepository.save(materiel);
        }

        return null; // ou lancer une exception si le matériel n'existe pas
    }
}
