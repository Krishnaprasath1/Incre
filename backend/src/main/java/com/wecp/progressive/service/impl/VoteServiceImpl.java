package com.wecp.progressive.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wecp.progressive.entity.Cricketer;
import com.wecp.progressive.entity.Team;
import com.wecp.progressive.entity.Vote;
import com.wecp.progressive.repository.CricketerRepository;
import com.wecp.progressive.repository.TeamRepository;
import com.wecp.progressive.repository.VoteRepository;
import com.wecp.progressive.service.VoteService;

@Service
public class VoteServiceImpl implements VoteService {

   
    private VoteRepository voteRepository;

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private CricketerRepository cricketerRepository;
    
    @Autowired
    public VoteServiceImpl(VoteRepository voteRepository) {
        this.voteRepository = voteRepository;
    }

    @Override
    public List<Vote> getAllVotes() {
        return voteRepository.findAll();
    }

    // @Override
    // public int createVote(Vote vote) {
    //     return voteRepository.save(vote).getVoteId();
    // }

    @Override
    public int createVote(Vote vote) 
    {
        if(vote.getTeam() != null)
        {
            Team team = teamRepository.findById(vote.getTeam().getTeamId()).get();
            if(team != null)
            {
                vote.setTeam(team);
                vote.setCategory("Team");
            }
        }
        else if(vote.getCricketer() != null)
        {
            Cricketer cricketer = cricketerRepository.findById(vote.getCricketer().getCricketerId()).get();
            if(cricketer != null)
            {
                vote.setCricketer(cricketer);
                vote.setCategory(cricketer.getRole());
            }
        }
        return voteRepository.save(vote).getVoteId();
    }

    @Override
    public Map<String, Long> getVotesCountOfAllCategories() {
        Map<String, Long> voteMap = new HashMap<>();

        voteMap.put("Team", voteRepository.countByCategory("Team"));
        voteMap.put("Batsman", voteRepository.countByCategory("Batsman"));
        voteMap.put("Bowler", voteRepository.countByCategory("Bowler"));
        voteMap.put("All-rounder", voteRepository.countByCategory("All-rounder"));
        voteMap.put("WicketKeeper", voteRepository.countByCategory("Wicketkeeper"));

        return voteMap;
        
    }

}